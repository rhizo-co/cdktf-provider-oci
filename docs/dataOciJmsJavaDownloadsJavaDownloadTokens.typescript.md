# `dataOciJmsJavaDownloadsJavaDownloadTokens` Submodule <a name="`dataOciJmsJavaDownloadsJavaDownloadTokens` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaDownloadTokens <a name="DataOciJmsJavaDownloadsJavaDownloadTokens" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens oci_jms_java_downloads_java_download_tokens}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens(scope: Construct, id: string, config: DataOciJmsJavaDownloadsJavaDownloadTokensConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig">DataOciJmsJavaDownloadsJavaDownloadTokensConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig">DataOciJmsJavaDownloadsJavaDownloadTokensConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetFamilyVersion">resetFamilyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetSearchByUser">resetSearchByUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciJmsJavaDownloadsJavaDownloadTokensFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFamilyVersion` <a name="resetFamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetFamilyVersion"></a>

```typescript
public resetFamilyVersion(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSearchByUser` <a name="resetSearchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetSearchByUser"></a>

```typescript
public resetSearchByUser(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetState"></a>

```typescript
public resetState(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadTokens resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isConstruct"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformElement"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformDataSource"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaDownloadTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsJavaDownloadsJavaDownloadTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaDownloadTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList">DataOciJmsJavaDownloadsJavaDownloadTokensFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.javaDownloadTokenCollection">javaDownloadTokenCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.familyVersionInput">familyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.searchByUserInput">searchByUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.familyVersion">familyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.searchByUser">searchByUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.filter"></a>

```typescript
public readonly filter: DataOciJmsJavaDownloadsJavaDownloadTokensFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList">DataOciJmsJavaDownloadsJavaDownloadTokensFilterList</a>

---

##### `javaDownloadTokenCollection`<sup>Required</sup> <a name="javaDownloadTokenCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.javaDownloadTokenCollection"></a>

```typescript
public readonly javaDownloadTokenCollection: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `familyVersionInput`<sup>Optional</sup> <a name="familyVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.familyVersionInput"></a>

```typescript
public readonly familyVersionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciJmsJavaDownloadsJavaDownloadTokensFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `searchByUserInput`<sup>Optional</sup> <a name="searchByUserInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.searchByUserInput"></a>

```typescript
public readonly searchByUserInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `familyVersion`<sup>Required</sup> <a name="familyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.familyVersion"></a>

```typescript
public readonly familyVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `searchByUser`<sup>Required</sup> <a name="searchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.searchByUser"></a>

```typescript
public readonly searchByUser: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaDownloadTokensConfig <a name="DataOciJmsJavaDownloadsJavaDownloadTokensConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaDownloadsJavaDownloadTokensConfig: dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#compartment_id DataOciJmsJavaDownloadsJavaDownloadTokens#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#display_name DataOciJmsJavaDownloadsJavaDownloadTokens#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.familyVersion">familyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#family_version DataOciJmsJavaDownloadsJavaDownloadTokens#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#id DataOciJmsJavaDownloadsJavaDownloadTokens#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.searchByUser">searchByUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#search_by_user DataOciJmsJavaDownloadsJavaDownloadTokens#search_by_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#state DataOciJmsJavaDownloadsJavaDownloadTokens#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#value DataOciJmsJavaDownloadsJavaDownloadTokens#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#compartment_id DataOciJmsJavaDownloadsJavaDownloadTokens#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#display_name DataOciJmsJavaDownloadsJavaDownloadTokens#display_name}.

---

##### `familyVersion`<sup>Optional</sup> <a name="familyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.familyVersion"></a>

```typescript
public readonly familyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#family_version DataOciJmsJavaDownloadsJavaDownloadTokens#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciJmsJavaDownloadsJavaDownloadTokensFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#filter DataOciJmsJavaDownloadsJavaDownloadTokens#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#id DataOciJmsJavaDownloadsJavaDownloadTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `searchByUser`<sup>Optional</sup> <a name="searchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.searchByUser"></a>

```typescript
public readonly searchByUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#search_by_user DataOciJmsJavaDownloadsJavaDownloadTokens#search_by_user}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#state DataOciJmsJavaDownloadsJavaDownloadTokens#state}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#value DataOciJmsJavaDownloadsJavaDownloadTokens#value}.

---

### DataOciJmsJavaDownloadsJavaDownloadTokensFilter <a name="DataOciJmsJavaDownloadsJavaDownloadTokensFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaDownloadsJavaDownloadTokensFilter: dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#name DataOciJmsJavaDownloadsJavaDownloadTokens#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#values DataOciJmsJavaDownloadsJavaDownloadTokens#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#regex DataOciJmsJavaDownloadsJavaDownloadTokens#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#name DataOciJmsJavaDownloadsJavaDownloadTokens#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#values DataOciJmsJavaDownloadsJavaDownloadTokens#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#regex DataOciJmsJavaDownloadsJavaDownloadTokens#regex}.

---

### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection: dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection = { ... }
```


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems: dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems = { ... }
```


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy: dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy = { ... }
```


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy: dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaDownloadTokensFilterList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsJavaDownloadsJavaDownloadTokensFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>[]

---


### DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsJavaDownloadsJavaDownloadTokensFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy</a>

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy</a>

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.licenseType">licenseType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeExpires">timeExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeLastUsed">timeLastUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList</a>

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string[];
```

- *Type:* string[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

---

##### `timeLastUsed`<sup>Required</sup> <a name="timeLastUsed" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeLastUsed"></a>

```typescript
public readonly timeLastUsed: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaDownloadsJavaDownloadTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection</a>

---



