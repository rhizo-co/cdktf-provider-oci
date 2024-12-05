# `dataOciDatabaseVmClusterNetworkDownloadConfigFile` Submodule <a name="`dataOciDatabaseVmClusterNetworkDownloadConfigFile` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterNetworkDownloadConfigFile <a name="DataOciDatabaseVmClusterNetworkDownloadConfigFile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file oci_database_vm_cluster_network_download_config_file}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetworkDownloadConfigFile } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile(scope: Construct, id: string, config: DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig">DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig">DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetBase64EncodeContent">resetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBase64EncodeContent` <a name="resetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetBase64EncodeContent"></a>

```typescript
public resetBase64EncodeContent(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterNetworkDownloadConfigFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isConstruct"></a>

```typescript
import { dataOciDatabaseVmClusterNetworkDownloadConfigFile } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformElement"></a>

```typescript
import { dataOciDatabaseVmClusterNetworkDownloadConfigFile } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseVmClusterNetworkDownloadConfigFile } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseVmClusterNetworkDownloadConfigFile } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterNetworkDownloadConfigFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseVmClusterNetworkDownloadConfigFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseVmClusterNetworkDownloadConfigFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterNetworkDownloadConfigFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.base64EncodeContentInput">base64EncodeContentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.vmClusterNetworkIdInput">vmClusterNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.base64EncodeContent">base64EncodeContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `base64EncodeContentInput`<sup>Optional</sup> <a name="base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.base64EncodeContentInput"></a>

```typescript
public readonly base64EncodeContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.exadataInfrastructureIdInput"></a>

```typescript
public readonly exadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `vmClusterNetworkIdInput`<sup>Optional</sup> <a name="vmClusterNetworkIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.vmClusterNetworkIdInput"></a>

```typescript
public readonly vmClusterNetworkIdInput: string;
```

- *Type:* string

---

##### `base64EncodeContent`<sup>Required</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.base64EncodeContent"></a>

```typescript
public readonly base64EncodeContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.vmClusterNetworkId"></a>

```typescript
public readonly vmClusterNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig <a name="DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetworkDownloadConfigFile } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterNetworkDownloadConfigFileConfig: dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#exadata_infrastructure_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#vm_cluster_network_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.base64EncodeContent">base64EncodeContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#base64_encode_content DataOciDatabaseVmClusterNetworkDownloadConfigFile#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#id DataOciDatabaseVmClusterNetworkDownloadConfigFile#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#exadata_infrastructure_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#exadata_infrastructure_id}.

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.vmClusterNetworkId"></a>

```typescript
public readonly vmClusterNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#vm_cluster_network_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#vm_cluster_network_id}.

---

##### `base64EncodeContent`<sup>Optional</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.base64EncodeContent"></a>

```typescript
public readonly base64EncodeContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#base64_encode_content DataOciDatabaseVmClusterNetworkDownloadConfigFile#base64_encode_content}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#id DataOciDatabaseVmClusterNetworkDownloadConfigFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



