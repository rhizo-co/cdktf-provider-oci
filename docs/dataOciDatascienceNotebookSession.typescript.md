# `dataOciDatascienceNotebookSession` Submodule <a name="`dataOciDatascienceNotebookSession` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceNotebookSession <a name="DataOciDatascienceNotebookSession" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_session oci_datascience_notebook_session}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession(scope: Construct, id: string, config: DataOciDatascienceNotebookSessionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig">DataOciDatascienceNotebookSessionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig">DataOciDatascienceNotebookSessionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatascienceNotebookSession resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isConstruct"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isTerraformElement"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isTerraformDataSource"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.generateConfigForImport"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatascienceNotebookSession resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatascienceNotebookSession to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatascienceNotebookSession that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_session#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceNotebookSession to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionConfigDetails">notebookSessionConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionConfigurationDetails">notebookSessionConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList">DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionRuntimeConfigDetails">notebookSessionRuntimeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsList">notebookSessionStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList">DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionUrl">notebookSessionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionIdInput">notebookSessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionId">notebookSessionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `notebookSessionConfigDetails`<sup>Required</sup> <a name="notebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionConfigDetails"></a>

```typescript
public readonly notebookSessionConfigDetails: DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList</a>

---

##### `notebookSessionConfigurationDetails`<sup>Required</sup> <a name="notebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionConfigurationDetails"></a>

```typescript
public readonly notebookSessionConfigurationDetails: DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList">DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList</a>

---

##### `notebookSessionRuntimeConfigDetails`<sup>Required</sup> <a name="notebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionRuntimeConfigDetails"></a>

```typescript
public readonly notebookSessionRuntimeConfigDetails: DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList</a>

---

##### `notebookSessionStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="notebookSessionStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsList"></a>

```typescript
public readonly notebookSessionStorageMountConfigurationDetailsList: DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList">DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList</a>

---

##### `notebookSessionUrl`<sup>Required</sup> <a name="notebookSessionUrl" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionUrl"></a>

```typescript
public readonly notebookSessionUrl: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `notebookSessionIdInput`<sup>Optional</sup> <a name="notebookSessionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionIdInput"></a>

```typescript
public readonly notebookSessionIdInput: string;
```

- *Type:* string

---

##### `notebookSessionId`<sup>Required</sup> <a name="notebookSessionId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.notebookSessionId"></a>

```typescript
public readonly notebookSessionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSession.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceNotebookSessionConfig <a name="DataOciDatascienceNotebookSessionConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionConfig: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.notebookSessionId">notebookSessionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_session#notebook_session_id DataOciDatascienceNotebookSession#notebook_session_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `notebookSessionId`<sup>Required</sup> <a name="notebookSessionId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionConfig.property.notebookSessionId"></a>

```typescript
public readonly notebookSessionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_session#notebook_session_id DataOciDatascienceNotebookSession#notebook_session_id}.

---

### DataOciDatascienceNotebookSessionNotebookSessionConfigDetails <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetails.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionNotebookSessionConfigDetails: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetails = { ... }
```


### DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails = { ... }
```


### DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails = { ... }
```


### DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails = { ... }
```


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails = { ... }
```


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails = { ... }
```


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection = { ... }
```


### DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct <a name="DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct: dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails">notebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

---

##### `notebookSessionShapeConfigDetails`<sup>Required</sup> <a name="notebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```typescript
public readonly notebookSessionShapeConfigDetails: DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList</a>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceNotebookSessionNotebookSessionConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionConfigDetails</a>

---


### DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference <a name="DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails">notebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails">DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

---

##### `notebookSessionShapeConfigDetails`<sup>Required</sup> <a name="notebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```typescript
public readonly notebookSessionShapeConfigDetails: DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList</a>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails">DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

---


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>

---


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection">notebookSessionGitRepoConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notebookSessionGitRepoConfigCollection`<sup>Required</sup> <a name="notebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection"></a>

```typescript
public readonly notebookSessionGitRepoConfigCollection: DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---


### DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables">customEnvironmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails">notebookSessionGitConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customEnvironmentVariables`<sup>Required</sup> <a name="customEnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables"></a>

```typescript
public readonly customEnvironmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `notebookSessionGitConfigDetails`<sup>Required</sup> <a name="notebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails"></a>

```typescript
public readonly notebookSessionGitConfigDetails: DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DataOciDatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList <a name="DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get"></a>

```typescript
public get(index: number): DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference <a name="DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceNotebookSession } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destinationDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId">exportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `destinationDirectoryName`<sup>Required</sup> <a name="destinationDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```typescript
public readonly destinationDirectoryName: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSession.DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DataOciDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>

---



