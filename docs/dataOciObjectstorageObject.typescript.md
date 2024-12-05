# `dataOciObjectstorageObject` Submodule <a name="`dataOciObjectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageObject <a name="DataOciObjectstorageObject" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer"></a>

```typescript
import { dataOciObjectstorageObject } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstorageObject.DataOciObjectstorageObject(scope: Construct, id: string, config: DataOciObjectstorageObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig">DataOciObjectstorageObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig">DataOciObjectstorageObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent">resetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit">resetContentLengthLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl">resetHttpResponseCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition">resetHttpResponseContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding">resetHttpResponseContentEncoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage">resetHttpResponseContentLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType">resetHttpResponseContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires">resetHttpResponseExpires</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBase64EncodeContent` <a name="resetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent"></a>

```typescript
public resetBase64EncodeContent(): void
```

##### `resetContentLengthLimit` <a name="resetContentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit"></a>

```typescript
public resetContentLengthLimit(): void
```

##### `resetHttpResponseCacheControl` <a name="resetHttpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl"></a>

```typescript
public resetHttpResponseCacheControl(): void
```

##### `resetHttpResponseContentDisposition` <a name="resetHttpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition"></a>

```typescript
public resetHttpResponseContentDisposition(): void
```

##### `resetHttpResponseContentEncoding` <a name="resetHttpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding"></a>

```typescript
public resetHttpResponseContentEncoding(): void
```

##### `resetHttpResponseContentLanguage` <a name="resetHttpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage"></a>

```typescript
public resetHttpResponseContentLanguage(): void
```

##### `resetHttpResponseContentType` <a name="resetHttpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType"></a>

```typescript
public resetHttpResponseContentType(): void
```

##### `resetHttpResponseExpires` <a name="resetHttpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires"></a>

```typescript
public resetHttpResponseExpires(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersionId` <a name="resetVersionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct"></a>

```typescript
import { dataOciObjectstorageObject } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement"></a>

```typescript
import { dataOciObjectstorageObject } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource"></a>

```typescript
import { dataOciObjectstorageObject } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport"></a>

```typescript
import { dataOciObjectstorageObject } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciObjectstorageObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength">contentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5">contentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier">storageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput">base64EncodeContentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput">contentLengthLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput">httpResponseCacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput">httpResponseContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput">httpResponseContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput">httpResponseContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput">httpResponseContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput">httpResponseExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent">base64EncodeContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit">contentLengthLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl">httpResponseCacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition">httpResponseContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding">httpResponseContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage">httpResponseContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType">httpResponseContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires">httpResponseExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength"></a>

```typescript
public readonly contentLength: string;
```

- *Type:* string

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

---

##### `base64EncodeContentInput`<sup>Optional</sup> <a name="base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput"></a>

```typescript
public readonly base64EncodeContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `contentLengthLimitInput`<sup>Optional</sup> <a name="contentLengthLimitInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput"></a>

```typescript
public readonly contentLengthLimitInput: number;
```

- *Type:* number

---

##### `httpResponseCacheControlInput`<sup>Optional</sup> <a name="httpResponseCacheControlInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput"></a>

```typescript
public readonly httpResponseCacheControlInput: string;
```

- *Type:* string

---

##### `httpResponseContentDispositionInput`<sup>Optional</sup> <a name="httpResponseContentDispositionInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput"></a>

```typescript
public readonly httpResponseContentDispositionInput: string;
```

- *Type:* string

---

##### `httpResponseContentEncodingInput`<sup>Optional</sup> <a name="httpResponseContentEncodingInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput"></a>

```typescript
public readonly httpResponseContentEncodingInput: string;
```

- *Type:* string

---

##### `httpResponseContentLanguageInput`<sup>Optional</sup> <a name="httpResponseContentLanguageInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput"></a>

```typescript
public readonly httpResponseContentLanguageInput: string;
```

- *Type:* string

---

##### `httpResponseContentTypeInput`<sup>Optional</sup> <a name="httpResponseContentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput"></a>

```typescript
public readonly httpResponseContentTypeInput: string;
```

- *Type:* string

---

##### `httpResponseExpiresInput`<sup>Optional</sup> <a name="httpResponseExpiresInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput"></a>

```typescript
public readonly httpResponseExpiresInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `base64EncodeContent`<sup>Required</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent"></a>

```typescript
public readonly base64EncodeContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `contentLengthLimit`<sup>Required</sup> <a name="contentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit"></a>

```typescript
public readonly contentLengthLimit: number;
```

- *Type:* number

---

##### `httpResponseCacheControl`<sup>Required</sup> <a name="httpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl"></a>

```typescript
public readonly httpResponseCacheControl: string;
```

- *Type:* string

---

##### `httpResponseContentDisposition`<sup>Required</sup> <a name="httpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition"></a>

```typescript
public readonly httpResponseContentDisposition: string;
```

- *Type:* string

---

##### `httpResponseContentEncoding`<sup>Required</sup> <a name="httpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding"></a>

```typescript
public readonly httpResponseContentEncoding: string;
```

- *Type:* string

---

##### `httpResponseContentLanguage`<sup>Required</sup> <a name="httpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage"></a>

```typescript
public readonly httpResponseContentLanguage: string;
```

- *Type:* string

---

##### `httpResponseContentType`<sup>Required</sup> <a name="httpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType"></a>

```typescript
public readonly httpResponseContentType: string;
```

- *Type:* string

---

##### `httpResponseExpires`<sup>Required</sup> <a name="httpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires"></a>

```typescript
public readonly httpResponseExpires: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageObjectConfig <a name="DataOciObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.Initializer"></a>

```typescript
import { dataOciObjectstorageObject } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstorageObjectConfig: dataOciObjectstorageObject.DataOciObjectstorageObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent">base64EncodeContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit">contentLengthLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl">httpResponseCacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition">httpResponseContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding">httpResponseContentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage">httpResponseContentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType">httpResponseContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires">httpResponseExpires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}.

---

##### `base64EncodeContent`<sup>Optional</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent"></a>

```typescript
public readonly base64EncodeContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}.

---

##### `contentLengthLimit`<sup>Optional</sup> <a name="contentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit"></a>

```typescript
public readonly contentLengthLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}.

---

##### `httpResponseCacheControl`<sup>Optional</sup> <a name="httpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl"></a>

```typescript
public readonly httpResponseCacheControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}.

---

##### `httpResponseContentDisposition`<sup>Optional</sup> <a name="httpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition"></a>

```typescript
public readonly httpResponseContentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}.

---

##### `httpResponseContentEncoding`<sup>Optional</sup> <a name="httpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding"></a>

```typescript
public readonly httpResponseContentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}.

---

##### `httpResponseContentLanguage`<sup>Optional</sup> <a name="httpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage"></a>

```typescript
public readonly httpResponseContentLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}.

---

##### `httpResponseContentType`<sup>Optional</sup> <a name="httpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType"></a>

```typescript
public readonly httpResponseContentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}.

---

##### `httpResponseExpires`<sup>Optional</sup> <a name="httpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires"></a>

```typescript
public readonly httpResponseExpires: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}.

---



