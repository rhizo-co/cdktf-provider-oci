# `dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info oci_log_analytics_namespace_storage_encryption_key_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig: dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems: dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keySource">keySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keySource`<sup>Required</sup> <a name="keySource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keySource"></a>

```typescript
public readonly keySource: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems</a>

---



