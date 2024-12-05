# `dataOciDatabaseManagementNamedCredential` Submodule <a name="`dataOciDatabaseManagementNamedCredential` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementNamedCredential <a name="DataOciDatabaseManagementNamedCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credential oci_database_management_named_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.Initializer"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential(scope: Construct, id: string, config: DataOciDatabaseManagementNamedCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig">DataOciDatabaseManagementNamedCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig">DataOciDatabaseManagementNamedCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementNamedCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementNamedCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementNamedCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementNamedCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementNamedCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.associatedResource">associatedResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList">DataOciDatabaseManagementNamedCredentialContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.namedCredentialIdInput">namedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `associatedResource`<sup>Required</sup> <a name="associatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.associatedResource"></a>

```typescript
public readonly associatedResource: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.content"></a>

```typescript
public readonly content: DataOciDatabaseManagementNamedCredentialContentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList">DataOciDatabaseManagementNamedCredentialContentList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `namedCredentialIdInput`<sup>Optional</sup> <a name="namedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.namedCredentialIdInput"></a>

```typescript
public readonly namedCredentialIdInput: string;
```

- *Type:* string

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementNamedCredentialConfig <a name="DataOciDatabaseManagementNamedCredentialConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementNamedCredentialConfig: dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credential#named_credential_id DataOciDatabaseManagementNamedCredential#named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialConfig.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credential#named_credential_id DataOciDatabaseManagementNamedCredential#named_credential_id}.

---

### DataOciDatabaseManagementNamedCredentialContent <a name="DataOciDatabaseManagementNamedCredentialContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContent.Initializer"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementNamedCredentialContent: dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContent = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementNamedCredentialContentList <a name="DataOciDatabaseManagementNamedCredentialContentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementNamedCredentialContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementNamedCredentialContentOutputReference <a name="DataOciDatabaseManagementNamedCredentialContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretAccessMode">passwordSecretAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContent">DataOciDatabaseManagementNamedCredentialContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretAccessMode`<sup>Required</sup> <a name="passwordSecretAccessMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretAccessMode"></a>

```typescript
public readonly passwordSecretAccessMode: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementNamedCredentialContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredential.DataOciDatabaseManagementNamedCredentialContent">DataOciDatabaseManagementNamedCredentialContent</a>

---



