# `dnsActionCreateZoneFromZoneFile` Submodule <a name="`dnsActionCreateZoneFromZoneFile` Submodule" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsActionCreateZoneFromZoneFile <a name="DnsActionCreateZoneFromZoneFile" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file oci_dns_action_create_zone_from_zone_file}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile(scope: Construct, id: string, config: DnsActionCreateZoneFromZoneFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig">DnsActionCreateZoneFromZoneFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig">DnsActionCreateZoneFromZoneFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetViewId">resetViewId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts"></a>

```typescript
public putTimeouts(value: DnsActionCreateZoneFromZoneFileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetViewId` <a name="resetViewId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetViewId"></a>

```typescript
public resetViewId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsActionCreateZoneFromZoneFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsActionCreateZoneFromZoneFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsActionCreateZoneFromZoneFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsActionCreateZoneFromZoneFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsActionCreateZoneFromZoneFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecConfig">dnssecConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList">DnsActionCreateZoneFromZoneFileDnssecConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecState">dnssecState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalDownstreams">externalDownstreams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList">DnsActionCreateZoneFromZoneFileExternalDownstreamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalMasters">externalMasters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList">DnsActionCreateZoneFromZoneFileExternalMastersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.isProtected">isProtected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.nameservers">nameservers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList">DnsActionCreateZoneFromZoneFileNameserversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.selfAttribute">selfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.serial">serial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference">DnsActionCreateZoneFromZoneFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneTransferServers">zoneTransferServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList">DnsActionCreateZoneFromZoneFileZoneTransferServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneType">zoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetailsInput">createZoneFromZoneFileDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewIdInput">viewIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetails">createZoneFromZoneFileDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewId">viewId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `dnssecConfig`<sup>Required</sup> <a name="dnssecConfig" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecConfig"></a>

```typescript
public readonly dnssecConfig: DnsActionCreateZoneFromZoneFileDnssecConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList">DnsActionCreateZoneFromZoneFileDnssecConfigList</a>

---

##### `dnssecState`<sup>Required</sup> <a name="dnssecState" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecState"></a>

```typescript
public readonly dnssecState: string;
```

- *Type:* string

---

##### `externalDownstreams`<sup>Required</sup> <a name="externalDownstreams" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalDownstreams"></a>

```typescript
public readonly externalDownstreams: DnsActionCreateZoneFromZoneFileExternalDownstreamsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList">DnsActionCreateZoneFromZoneFileExternalDownstreamsList</a>

---

##### `externalMasters`<sup>Required</sup> <a name="externalMasters" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalMasters"></a>

```typescript
public readonly externalMasters: DnsActionCreateZoneFromZoneFileExternalMastersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList">DnsActionCreateZoneFromZoneFileExternalMastersList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.isProtected"></a>

```typescript
public readonly isProtected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.nameservers"></a>

```typescript
public readonly nameservers: DnsActionCreateZoneFromZoneFileNameserversList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList">DnsActionCreateZoneFromZoneFileNameserversList</a>

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* string

---

##### `serial`<sup>Required</sup> <a name="serial" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.serial"></a>

```typescript
public readonly serial: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeouts"></a>

```typescript
public readonly timeouts: DnsActionCreateZoneFromZoneFileTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference">DnsActionCreateZoneFromZoneFileTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `zoneTransferServers`<sup>Required</sup> <a name="zoneTransferServers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneTransferServers"></a>

```typescript
public readonly zoneTransferServers: DnsActionCreateZoneFromZoneFileZoneTransferServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList">DnsActionCreateZoneFromZoneFileZoneTransferServersList</a>

---

##### `zoneType`<sup>Required</sup> <a name="zoneType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneType"></a>

```typescript
public readonly zoneType: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `createZoneFromZoneFileDetailsInput`<sup>Optional</sup> <a name="createZoneFromZoneFileDetailsInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetailsInput"></a>

```typescript
public readonly createZoneFromZoneFileDetailsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DnsActionCreateZoneFromZoneFileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>

---

##### `viewIdInput`<sup>Optional</sup> <a name="viewIdInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewIdInput"></a>

```typescript
public readonly viewIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createZoneFromZoneFileDetails`<sup>Required</sup> <a name="createZoneFromZoneFileDetails" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetails"></a>

```typescript
public readonly createZoneFromZoneFileDetails: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsActionCreateZoneFromZoneFileConfig <a name="DnsActionCreateZoneFromZoneFileConfig" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileConfig: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#compartment_id DnsActionCreateZoneFromZoneFile#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.createZoneFromZoneFileDetails">createZoneFromZoneFileDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create_zone_from_zone_file_details DnsActionCreateZoneFromZoneFile#create_zone_from_zone_file_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#id DnsActionCreateZoneFromZoneFile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#scope DnsActionCreateZoneFromZoneFile#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.viewId">viewId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#view_id DnsActionCreateZoneFromZoneFile#view_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#compartment_id DnsActionCreateZoneFromZoneFile#compartment_id}.

---

##### `createZoneFromZoneFileDetails`<sup>Required</sup> <a name="createZoneFromZoneFileDetails" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.createZoneFromZoneFileDetails"></a>

```typescript
public readonly createZoneFromZoneFileDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create_zone_from_zone_file_details DnsActionCreateZoneFromZoneFile#create_zone_from_zone_file_details}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#id DnsActionCreateZoneFromZoneFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#scope DnsActionCreateZoneFromZoneFile#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DnsActionCreateZoneFromZoneFileTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#timeouts DnsActionCreateZoneFromZoneFile#timeouts}

---

##### `viewId`<sup>Optional</sup> <a name="viewId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#view_id DnsActionCreateZoneFromZoneFile#view_id}.

---

### DnsActionCreateZoneFromZoneFileDnssecConfig <a name="DnsActionCreateZoneFromZoneFileDnssecConfig" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileDnssecConfig: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig = { ... }
```


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions = { ... }
```


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData = { ... }
```


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions = { ... }
```


### DnsActionCreateZoneFromZoneFileExternalDownstreams <a name="DnsActionCreateZoneFromZoneFileExternalDownstreams" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileExternalDownstreams: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams = { ... }
```


### DnsActionCreateZoneFromZoneFileExternalMasters <a name="DnsActionCreateZoneFromZoneFileExternalMasters" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileExternalMasters: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters = { ... }
```


### DnsActionCreateZoneFromZoneFileNameservers <a name="DnsActionCreateZoneFromZoneFileNameservers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileNameservers: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers = { ... }
```


### DnsActionCreateZoneFromZoneFileTimeouts <a name="DnsActionCreateZoneFromZoneFileTimeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileTimeouts: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create DnsActionCreateZoneFromZoneFile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#delete DnsActionCreateZoneFromZoneFile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#update DnsActionCreateZoneFromZoneFile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create DnsActionCreateZoneFromZoneFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#delete DnsActionCreateZoneFromZoneFile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#update DnsActionCreateZoneFromZoneFile#update}.

---

### DnsActionCreateZoneFromZoneFileZoneTransferServers <a name="DnsActionCreateZoneFromZoneFileZoneTransferServers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

const dnsActionCreateZoneFromZoneFileZoneTransferServers: dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get"></a>

```typescript
public get(index: number): DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.digestType">digestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.rdata">rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.digestType"></a>

```typescript
public readonly digestType: string;
```

- *Type:* string

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.rdata"></a>

```typescript
public readonly rdata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get"></a>

```typescript
public get(index: number): DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.dsData">dsData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.lengthInBytes">lengthInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid">predecessorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid">successorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeActivated">timeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeExpired">timeExpired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeInactivated">timeInactivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePromoted">timePromoted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePublished">timePublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeUnpublished">timeUnpublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `dsData`<sup>Required</sup> <a name="dsData" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.dsData"></a>

```typescript
public readonly dsData: DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList</a>

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `lengthInBytes`<sup>Required</sup> <a name="lengthInBytes" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.lengthInBytes"></a>

```typescript
public readonly lengthInBytes: number;
```

- *Type:* number

---

##### `predecessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="predecessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid"></a>

```typescript
public readonly predecessorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `successorDnssecKeyVersionUuid`<sup>Required</sup> <a name="successorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid"></a>

```typescript
public readonly successorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeActivated"></a>

```typescript
public readonly timeActivated: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpired`<sup>Required</sup> <a name="timeExpired" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeExpired"></a>

```typescript
public readonly timeExpired: string;
```

- *Type:* string

---

##### `timeInactivated`<sup>Required</sup> <a name="timeInactivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeInactivated"></a>

```typescript
public readonly timeInactivated: string;
```

- *Type:* string

---

##### `timePromoted`<sup>Required</sup> <a name="timePromoted" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePromoted"></a>

```typescript
public readonly timePromoted: string;
```

- *Type:* string

---

##### `timePublished`<sup>Required</sup> <a name="timePublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePublished"></a>

```typescript
public readonly timePublished: string;
```

- *Type:* string

---

##### `timeUnpublished`<sup>Required</sup> <a name="timeUnpublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeUnpublished"></a>

```typescript
public readonly timeUnpublished: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get"></a>

```typescript
public get(index: number): DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.kskDnssecKeyVersions">kskDnssecKeyVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.zskDnssecKeyVersions">zskDnssecKeyVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig">DnsActionCreateZoneFromZoneFileDnssecConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kskDnssecKeyVersions`<sup>Required</sup> <a name="kskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.kskDnssecKeyVersions"></a>

```typescript
public readonly kskDnssecKeyVersions: DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList</a>

---

##### `zskDnssecKeyVersions`<sup>Required</sup> <a name="zskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.zskDnssecKeyVersions"></a>

```typescript
public readonly zskDnssecKeyVersions: DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsActionCreateZoneFromZoneFileDnssecConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig">DnsActionCreateZoneFromZoneFileDnssecConfig</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get"></a>

```typescript
public get(index: number): DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.lengthInBytes">lengthInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid">predecessorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid">successorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeActivated">timeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeExpired">timeExpired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeInactivated">timeInactivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePromoted">timePromoted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePublished">timePublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeUnpublished">timeUnpublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `lengthInBytes`<sup>Required</sup> <a name="lengthInBytes" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.lengthInBytes"></a>

```typescript
public readonly lengthInBytes: number;
```

- *Type:* number

---

##### `predecessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="predecessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid"></a>

```typescript
public readonly predecessorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `successorDnssecKeyVersionUuid`<sup>Required</sup> <a name="successorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid"></a>

```typescript
public readonly successorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeActivated"></a>

```typescript
public readonly timeActivated: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpired`<sup>Required</sup> <a name="timeExpired" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeExpired"></a>

```typescript
public readonly timeExpired: string;
```

- *Type:* string

---

##### `timeInactivated`<sup>Required</sup> <a name="timeInactivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeInactivated"></a>

```typescript
public readonly timeInactivated: string;
```

- *Type:* string

---

##### `timePromoted`<sup>Required</sup> <a name="timePromoted" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePromoted"></a>

```typescript
public readonly timePromoted: string;
```

- *Type:* string

---

##### `timePublished`<sup>Required</sup> <a name="timePublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePublished"></a>

```typescript
public readonly timePublished: string;
```

- *Type:* string

---

##### `timeUnpublished`<sup>Required</sup> <a name="timeUnpublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeUnpublished"></a>

```typescript
public readonly timeUnpublished: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions</a>

---


### DnsActionCreateZoneFromZoneFileExternalDownstreamsList <a name="DnsActionCreateZoneFromZoneFileExternalDownstreamsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get"></a>

```typescript
public get(index: number): DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference <a name="DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.tsigKeyId">tsigKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams">DnsActionCreateZoneFromZoneFileExternalDownstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tsigKeyId`<sup>Required</sup> <a name="tsigKeyId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.tsigKeyId"></a>

```typescript
public readonly tsigKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsActionCreateZoneFromZoneFileExternalDownstreams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams">DnsActionCreateZoneFromZoneFileExternalDownstreams</a>

---


### DnsActionCreateZoneFromZoneFileExternalMastersList <a name="DnsActionCreateZoneFromZoneFileExternalMastersList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get"></a>

```typescript
public get(index: number): DnsActionCreateZoneFromZoneFileExternalMastersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsActionCreateZoneFromZoneFileExternalMastersOutputReference <a name="DnsActionCreateZoneFromZoneFileExternalMastersOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.tsigKeyId">tsigKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters">DnsActionCreateZoneFromZoneFileExternalMasters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tsigKeyId`<sup>Required</sup> <a name="tsigKeyId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.tsigKeyId"></a>

```typescript
public readonly tsigKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsActionCreateZoneFromZoneFileExternalMasters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters">DnsActionCreateZoneFromZoneFileExternalMasters</a>

---


### DnsActionCreateZoneFromZoneFileNameserversList <a name="DnsActionCreateZoneFromZoneFileNameserversList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get"></a>

```typescript
public get(index: number): DnsActionCreateZoneFromZoneFileNameserversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsActionCreateZoneFromZoneFileNameserversOutputReference <a name="DnsActionCreateZoneFromZoneFileNameserversOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers">DnsActionCreateZoneFromZoneFileNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsActionCreateZoneFromZoneFileNameservers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers">DnsActionCreateZoneFromZoneFileNameservers</a>

---


### DnsActionCreateZoneFromZoneFileTimeoutsOutputReference <a name="DnsActionCreateZoneFromZoneFileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsActionCreateZoneFromZoneFileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>

---


### DnsActionCreateZoneFromZoneFileZoneTransferServersList <a name="DnsActionCreateZoneFromZoneFileZoneTransferServersList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get"></a>

```typescript
public get(index: number): DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference <a name="DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer"></a>

```typescript
import { dnsActionCreateZoneFromZoneFile } from 'rhizo-co-terraform-provider-oci'

new dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferDestination">isTransferDestination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferSource">isTransferSource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers">DnsActionCreateZoneFromZoneFileZoneTransferServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `isTransferDestination`<sup>Required</sup> <a name="isTransferDestination" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferDestination"></a>

```typescript
public readonly isTransferDestination: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTransferSource`<sup>Required</sup> <a name="isTransferSource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferSource"></a>

```typescript
public readonly isTransferSource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsActionCreateZoneFromZoneFileZoneTransferServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers">DnsActionCreateZoneFromZoneFileZoneTransferServers</a>

---



