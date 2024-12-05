# `serviceCatalogServiceCatalogAssociation` Submodule <a name="`serviceCatalogServiceCatalogAssociation` Submodule" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCatalogServiceCatalogAssociation <a name="ServiceCatalogServiceCatalogAssociation" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association oci_service_catalog_service_catalog_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.Initializer"></a>

```typescript
import { serviceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

new serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation(scope: Construct, id: string, config: ServiceCatalogServiceCatalogAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig">ServiceCatalogServiceCatalogAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig">ServiceCatalogServiceCatalogAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.resetEntityType">resetEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ServiceCatalogServiceCatalogAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts">ServiceCatalogServiceCatalogAssociationTimeouts</a>

---

##### `resetEntityType` <a name="resetEntityType" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.resetEntityType"></a>

```typescript
public resetEntityType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceCatalogServiceCatalogAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isConstruct"></a>

```typescript
import { serviceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isTerraformElement"></a>

```typescript
import { serviceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isTerraformResource"></a>

```typescript
import { serviceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.generateConfigForImport"></a>

```typescript
import { serviceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceCatalogServiceCatalogAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceCatalogServiceCatalogAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceCatalogServiceCatalogAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCatalogServiceCatalogAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference">ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.serviceCatalogIdInput">serviceCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts">ServiceCatalogServiceCatalogAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.serviceCatalogId">serviceCatalogId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference">ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference</a>

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceCatalogIdInput`<sup>Optional</sup> <a name="serviceCatalogIdInput" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.serviceCatalogIdInput"></a>

```typescript
public readonly serviceCatalogIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServiceCatalogServiceCatalogAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts">ServiceCatalogServiceCatalogAssociationTimeouts</a>

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceCatalogId`<sup>Required</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.serviceCatalogId"></a>

```typescript
public readonly serviceCatalogId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCatalogServiceCatalogAssociationConfig <a name="ServiceCatalogServiceCatalogAssociationConfig" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.Initializer"></a>

```typescript
import { serviceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

const serviceCatalogServiceCatalogAssociationConfig: serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#entity_id ServiceCatalogServiceCatalogAssociation#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.serviceCatalogId">serviceCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#service_catalog_id ServiceCatalogServiceCatalogAssociation#service_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#entity_type ServiceCatalogServiceCatalogAssociation#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#id ServiceCatalogServiceCatalogAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts">ServiceCatalogServiceCatalogAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#entity_id ServiceCatalogServiceCatalogAssociation#entity_id}.

---

##### `serviceCatalogId`<sup>Required</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.serviceCatalogId"></a>

```typescript
public readonly serviceCatalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#service_catalog_id ServiceCatalogServiceCatalogAssociation#service_catalog_id}.

---

##### `entityType`<sup>Optional</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#entity_type ServiceCatalogServiceCatalogAssociation#entity_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#id ServiceCatalogServiceCatalogAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceCatalogServiceCatalogAssociationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts">ServiceCatalogServiceCatalogAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#timeouts ServiceCatalogServiceCatalogAssociation#timeouts}

---

### ServiceCatalogServiceCatalogAssociationTimeouts <a name="ServiceCatalogServiceCatalogAssociationTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts.Initializer"></a>

```typescript
import { serviceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

const serviceCatalogServiceCatalogAssociationTimeouts: serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#create ServiceCatalogServiceCatalogAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#delete ServiceCatalogServiceCatalogAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#update ServiceCatalogServiceCatalogAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#create ServiceCatalogServiceCatalogAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#delete ServiceCatalogServiceCatalogAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_service_catalog_association#update ServiceCatalogServiceCatalogAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference <a name="ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { serviceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

new serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts">ServiceCatalogServiceCatalogAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceCatalogServiceCatalogAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceCatalogServiceCatalogAssociation.ServiceCatalogServiceCatalogAssociationTimeouts">ServiceCatalogServiceCatalogAssociationTimeouts</a>

---



