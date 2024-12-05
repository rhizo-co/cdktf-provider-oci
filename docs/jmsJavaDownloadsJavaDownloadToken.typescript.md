# `jmsJavaDownloadsJavaDownloadToken` Submodule <a name="`jmsJavaDownloadsJavaDownloadToken` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaDownloadToken <a name="JmsJavaDownloadsJavaDownloadToken" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token oci_jms_java_downloads_java_download_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken(scope: Construct, id: string, config: JmsJavaDownloadsJavaDownloadTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig">JmsJavaDownloadsJavaDownloadTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig">JmsJavaDownloadsJavaDownloadTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts"></a>

```typescript
public putTimeouts(value: JmsJavaDownloadsJavaDownloadTokenTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JmsJavaDownloadsJavaDownloadToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JmsJavaDownloadsJavaDownloadToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaDownloadToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.createdBy">createdBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList">JmsJavaDownloadsJavaDownloadTokenCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeLastUsed">timeLastUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersionInput">javaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpiresInput">timeExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseType">licenseType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpires">timeExpires</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.createdBy"></a>

```typescript
public readonly createdBy: JmsJavaDownloadsJavaDownloadTokenCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList">JmsJavaDownloadsJavaDownloadTokenCreatedByList</a>

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastUsed`<sup>Required</sup> <a name="timeLastUsed" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeLastUsed"></a>

```typescript
public readonly timeLastUsed: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeouts"></a>

```typescript
public readonly timeouts: JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersionInput"></a>

```typescript
public readonly javaVersionInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string[];
```

- *Type:* string[]

---

##### `timeExpiresInput`<sup>Optional</sup> <a name="timeExpiresInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpiresInput"></a>

```typescript
public readonly timeExpiresInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | JmsJavaDownloadsJavaDownloadTokenTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseType"></a>

```typescript
public readonly licenseType: string[];
```

- *Type:* string[]

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaDownloadTokenConfig <a name="JmsJavaDownloadsJavaDownloadTokenConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaDownloadTokenConfig: jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.javaVersion">javaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.licenseType">licenseType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeExpires">timeExpires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}.

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}.

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}.

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeouts"></a>

```typescript
public readonly timeouts: JmsJavaDownloadsJavaDownloadTokenTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#timeouts JmsJavaDownloadsJavaDownloadToken#timeouts}

---

### JmsJavaDownloadsJavaDownloadTokenCreatedBy <a name="JmsJavaDownloadsJavaDownloadTokenCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaDownloadTokenCreatedBy: jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy = { ... }
```


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaDownloadTokenLastUpdatedBy: jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy = { ... }
```


### JmsJavaDownloadsJavaDownloadTokenTimeouts <a name="JmsJavaDownloadsJavaDownloadTokenTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaDownloadTokenTimeouts: jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaDownloadTokenCreatedByList <a name="JmsJavaDownloadsJavaDownloadTokenCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get"></a>

```typescript
public get(index: number): JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy">JmsJavaDownloadsJavaDownloadTokenCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsJavaDownloadsJavaDownloadTokenCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy">JmsJavaDownloadsJavaDownloadTokenCreatedBy</a>

---


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get"></a>

```typescript
public get(index: number): JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a>

---


### JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadToken } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsJavaDownloadsJavaDownloadTokenTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

---



