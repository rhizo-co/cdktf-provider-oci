# `securityAttributeSecurityAttribute` Submodule <a name="`securityAttributeSecurityAttribute` Submodule" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityAttributeSecurityAttribute <a name="SecurityAttributeSecurityAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute oci_security_attribute_security_attribute}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

new securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute(scope: Construct, id: string, config: SecurityAttributeSecurityAttributeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig">SecurityAttributeSecurityAttributeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig">SecurityAttributeSecurityAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator">putValidator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetIsRetired">resetIsRetired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetValidator">resetValidator</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts"></a>

```typescript
public putTimeouts(value: SecurityAttributeSecurityAttributeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a>

---

##### `putValidator` <a name="putValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator"></a>

```typescript
public putValidator(value: SecurityAttributeSecurityAttributeValidator): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsRetired` <a name="resetIsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetIsRetired"></a>

```typescript
public resetIsRetired(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidator` <a name="resetValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetValidator"></a>

```typescript
public resetValidator(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityAttributeSecurityAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityAttributeSecurityAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityAttributeSecurityAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName">securityAttributeNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference">SecurityAttributeSecurityAttributeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validator">validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference">SecurityAttributeSecurityAttributeValidatorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetiredInput">isRetiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput">securityAttributeNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validatorInput">validatorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetired">isRetired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId">securityAttributeNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `securityAttributeNamespaceName`<sup>Required</sup> <a name="securityAttributeNamespaceName" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName"></a>

```typescript
public readonly securityAttributeNamespaceName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityAttributeSecurityAttributeTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference">SecurityAttributeSecurityAttributeTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validator`<sup>Required</sup> <a name="validator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validator"></a>

```typescript
public readonly validator: SecurityAttributeSecurityAttributeValidatorOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference">SecurityAttributeSecurityAttributeValidatorOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isRetiredInput`<sup>Optional</sup> <a name="isRetiredInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetiredInput"></a>

```typescript
public readonly isRetiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityAttributeNamespaceIdInput`<sup>Optional</sup> <a name="securityAttributeNamespaceIdInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput"></a>

```typescript
public readonly securityAttributeNamespaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecurityAttributeSecurityAttributeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a>

---

##### `validatorInput`<sup>Optional</sup> <a name="validatorInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validatorInput"></a>

```typescript
public readonly validatorInput: SecurityAttributeSecurityAttributeValidator;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRetired`<sup>Required</sup> <a name="isRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetired"></a>

```typescript
public readonly isRetired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityAttributeNamespaceId`<sup>Required</sup> <a name="securityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId"></a>

```typescript
public readonly securityAttributeNamespaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityAttributeSecurityAttributeConfig <a name="SecurityAttributeSecurityAttributeConfig" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.Initializer"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

const securityAttributeSecurityAttributeConfig: securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#description SecurityAttributeSecurityAttribute#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#name SecurityAttributeSecurityAttribute#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId">securityAttributeNamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#security_attribute_namespace_id SecurityAttributeSecurityAttribute#security_attribute_namespace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#id SecurityAttributeSecurityAttribute#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.isRetired">isRetired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#is_retired SecurityAttributeSecurityAttribute#is_retired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.validator">validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | validator block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#description SecurityAttributeSecurityAttribute#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#name SecurityAttributeSecurityAttribute#name}.

---

##### `securityAttributeNamespaceId`<sup>Required</sup> <a name="securityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId"></a>

```typescript
public readonly securityAttributeNamespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#security_attribute_namespace_id SecurityAttributeSecurityAttribute#security_attribute_namespace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#id SecurityAttributeSecurityAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRetired`<sup>Optional</sup> <a name="isRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.isRetired"></a>

```typescript
public readonly isRetired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#is_retired SecurityAttributeSecurityAttribute#is_retired}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityAttributeSecurityAttributeTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#timeouts SecurityAttributeSecurityAttribute#timeouts}

---

##### `validator`<sup>Optional</sup> <a name="validator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.validator"></a>

```typescript
public readonly validator: SecurityAttributeSecurityAttributeValidator;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

validator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator SecurityAttributeSecurityAttribute#validator}

---

### SecurityAttributeSecurityAttributeTimeouts <a name="SecurityAttributeSecurityAttributeTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.Initializer"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

const securityAttributeSecurityAttributeTimeouts: securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#create SecurityAttributeSecurityAttribute#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#delete SecurityAttributeSecurityAttribute#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#update SecurityAttributeSecurityAttribute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#create SecurityAttributeSecurityAttribute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#delete SecurityAttributeSecurityAttribute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#update SecurityAttributeSecurityAttribute#update}.

---

### SecurityAttributeSecurityAttributeValidator <a name="SecurityAttributeSecurityAttributeValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.Initializer"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

const securityAttributeSecurityAttributeValidator: securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.validatorType">validatorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator_type SecurityAttributeSecurityAttribute#validator_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#values SecurityAttributeSecurityAttribute#values}. |

---

##### `validatorType`<sup>Required</sup> <a name="validatorType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.validatorType"></a>

```typescript
public readonly validatorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator_type SecurityAttributeSecurityAttribute#validator_type}.

---

##### `values`<sup>Optional</sup> <a name="values" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#values SecurityAttributeSecurityAttribute#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityAttributeSecurityAttributeTimeoutsOutputReference <a name="SecurityAttributeSecurityAttributeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

new securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityAttributeSecurityAttributeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a>

---


### SecurityAttributeSecurityAttributeValidatorOutputReference <a name="SecurityAttributeSecurityAttributeValidatorOutputReference" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer"></a>

```typescript
import { securityAttributeSecurityAttribute } from 'rhizo-co-terraform-provider-oci'

new securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorTypeInput">validatorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType">validatorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validatorTypeInput`<sup>Optional</sup> <a name="validatorTypeInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorTypeInput"></a>

```typescript
public readonly validatorTypeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `validatorType`<sup>Required</sup> <a name="validatorType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType"></a>

```typescript
public readonly validatorType: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityAttributeSecurityAttributeValidator;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---



