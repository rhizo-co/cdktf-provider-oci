# `dataOciObjectstoragePreauthrequest` Submodule <a name="`dataOciObjectstoragePreauthrequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePreauthrequest <a name="DataOciObjectstoragePreauthrequest" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest oci_objectstorage_preauthrequest}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest(scope: Construct, id: string, config: DataOciObjectstoragePreauthrequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig">DataOciObjectstoragePreauthrequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig">DataOciObjectstoragePreauthrequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isConstruct"></a>

```typescript
import { dataOciObjectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformElement"></a>

```typescript
import { dataOciObjectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformDataSource"></a>

```typescript
import { dataOciObjectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport"></a>

```typescript
import { dataOciObjectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciObjectstoragePreauthrequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciObjectstoragePreauthrequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePreauthrequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.accessUri">accessUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucketListingAction">bucketListingAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.fullPath">fullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.timeExpires">timeExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.parIdInput">parIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.parId">parId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `accessUri`<sup>Required</sup> <a name="accessUri" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.accessUri"></a>

```typescript
public readonly accessUri: string;
```

- *Type:* string

---

##### `bucketListingAction`<sup>Required</sup> <a name="bucketListingAction" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucketListingAction"></a>

```typescript
public readonly bucketListingAction: string;
```

- *Type:* string

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.fullPath"></a>

```typescript
public readonly fullPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `parIdInput`<sup>Optional</sup> <a name="parIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.parIdInput"></a>

```typescript
public readonly parIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `parId`<sup>Required</sup> <a name="parId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.parId"></a>

```typescript
public readonly parId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePreauthrequestConfig <a name="DataOciObjectstoragePreauthrequestConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstoragePreauthrequestConfig: dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#bucket DataOciObjectstoragePreauthrequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#namespace DataOciObjectstoragePreauthrequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.parId">parId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#par_id DataOciObjectstoragePreauthrequest#par_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#bucket DataOciObjectstoragePreauthrequest#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#namespace DataOciObjectstoragePreauthrequest#namespace}.

---

##### `parId`<sup>Required</sup> <a name="parId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.parId"></a>

```typescript
public readonly parId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#par_id DataOciObjectstoragePreauthrequest#par_id}.

---



