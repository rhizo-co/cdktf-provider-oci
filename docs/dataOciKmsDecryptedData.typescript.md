# `dataOciKmsDecryptedData` Submodule <a name="`dataOciKmsDecryptedData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciKmsDecryptedData <a name="DataOciKmsDecryptedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data oci_kms_decrypted_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer"></a>

```typescript
import { dataOciKmsDecryptedData } from 'rhizo-co-terraform-provider-oci'

new dataOciKmsDecryptedData.DataOciKmsDecryptedData(scope: Construct, id: string, config: DataOciKmsDecryptedDataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig">DataOciKmsDecryptedDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig">DataOciKmsDecryptedDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetAssociatedData">resetAssociatedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAssociatedData` <a name="resetAssociatedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetAssociatedData"></a>

```typescript
public resetAssociatedData(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciKmsDecryptedData resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isConstruct"></a>

```typescript
import { dataOciKmsDecryptedData } from 'rhizo-co-terraform-provider-oci'

dataOciKmsDecryptedData.DataOciKmsDecryptedData.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformElement"></a>

```typescript
import { dataOciKmsDecryptedData } from 'rhizo-co-terraform-provider-oci'

dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformDataSource"></a>

```typescript
import { dataOciKmsDecryptedData } from 'rhizo-co-terraform-provider-oci'

dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport"></a>

```typescript
import { dataOciKmsDecryptedData } from 'rhizo-co-terraform-provider-oci'

dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciKmsDecryptedData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciKmsDecryptedData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciKmsDecryptedData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciKmsDecryptedData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.plaintextChecksum">plaintextChecksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.associatedDataInput">associatedDataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.ciphertextInput">ciphertextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cryptoEndpointInput">cryptoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.associatedData">associatedData</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.ciphertext">ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

##### `plaintextChecksum`<sup>Required</sup> <a name="plaintextChecksum" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.plaintextChecksum"></a>

```typescript
public readonly plaintextChecksum: string;
```

- *Type:* string

---

##### `associatedDataInput`<sup>Optional</sup> <a name="associatedDataInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.associatedDataInput"></a>

```typescript
public readonly associatedDataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ciphertextInput`<sup>Optional</sup> <a name="ciphertextInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.ciphertextInput"></a>

```typescript
public readonly ciphertextInput: string;
```

- *Type:* string

---

##### `cryptoEndpointInput`<sup>Optional</sup> <a name="cryptoEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cryptoEndpointInput"></a>

```typescript
public readonly cryptoEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `associatedData`<sup>Required</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.associatedData"></a>

```typescript
public readonly associatedData: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cryptoEndpoint"></a>

```typescript
public readonly cryptoEndpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciKmsDecryptedDataConfig <a name="DataOciKmsDecryptedDataConfig" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.Initializer"></a>

```typescript
import { dataOciKmsDecryptedData } from 'rhizo-co-terraform-provider-oci'

const dataOciKmsDecryptedDataConfig: dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.ciphertext">ciphertext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#ciphertext DataOciKmsDecryptedData#ciphertext}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#crypto_endpoint DataOciKmsDecryptedData#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#key_id DataOciKmsDecryptedData#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.associatedData">associatedData</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#associated_data DataOciKmsDecryptedData#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#id DataOciKmsDecryptedData#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#ciphertext DataOciKmsDecryptedData#ciphertext}.

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.cryptoEndpoint"></a>

```typescript
public readonly cryptoEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#crypto_endpoint DataOciKmsDecryptedData#crypto_endpoint}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#key_id DataOciKmsDecryptedData#key_id}.

---

##### `associatedData`<sup>Optional</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.associatedData"></a>

```typescript
public readonly associatedData: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#associated_data DataOciKmsDecryptedData#associated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#id DataOciKmsDecryptedData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



