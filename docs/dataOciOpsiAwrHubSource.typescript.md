# `dataOciOpsiAwrHubSource` Submodule <a name="`dataOciOpsiAwrHubSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubSource <a name="DataOciOpsiAwrHubSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_source oci_opsi_awr_hub_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSource } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource(scope: Construct, id: string, config: DataOciOpsiAwrHubSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig">DataOciOpsiAwrHubSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig">DataOciOpsiAwrHubSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isConstruct"></a>

```typescript
import { dataOciOpsiAwrHubSource } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isTerraformElement"></a>

```typescript
import { dataOciOpsiAwrHubSource } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiAwrHubSource } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.generateConfigForImport"></a>

```typescript
import { dataOciOpsiAwrHubSource } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiAwrHubSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiAwrHubSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiAwrHubSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.associatedOpsiId">associatedOpsiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.associatedResourceId">associatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrHubId">awrHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrHubOpsiSourceId">awrHubOpsiSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrSourceDatabaseId">awrSourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.hoursSinceLastImport">hoursSinceLastImport</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.isRegisteredWithAwrHub">isRegisteredWithAwrHub</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.maxSnapshotIdentifier">maxSnapshotIdentifier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.minSnapshotIdentifier">minSnapshotIdentifier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.sourceMailBoxUrl">sourceMailBoxUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.timeFirstSnapshotGenerated">timeFirstSnapshotGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.timeLastSnapshotGenerated">timeLastSnapshotGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrHubSourceIdInput">awrHubSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrHubSourceId">awrHubSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `associatedOpsiId`<sup>Required</sup> <a name="associatedOpsiId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.associatedOpsiId"></a>

```typescript
public readonly associatedOpsiId: string;
```

- *Type:* string

---

##### `associatedResourceId`<sup>Required</sup> <a name="associatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.associatedResourceId"></a>

```typescript
public readonly associatedResourceId: string;
```

- *Type:* string

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

---

##### `awrHubOpsiSourceId`<sup>Required</sup> <a name="awrHubOpsiSourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrHubOpsiSourceId"></a>

```typescript
public readonly awrHubOpsiSourceId: string;
```

- *Type:* string

---

##### `awrSourceDatabaseId`<sup>Required</sup> <a name="awrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrSourceDatabaseId"></a>

```typescript
public readonly awrSourceDatabaseId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hoursSinceLastImport`<sup>Required</sup> <a name="hoursSinceLastImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.hoursSinceLastImport"></a>

```typescript
public readonly hoursSinceLastImport: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRegisteredWithAwrHub`<sup>Required</sup> <a name="isRegisteredWithAwrHub" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.isRegisteredWithAwrHub"></a>

```typescript
public readonly isRegisteredWithAwrHub: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxSnapshotIdentifier`<sup>Required</sup> <a name="maxSnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.maxSnapshotIdentifier"></a>

```typescript
public readonly maxSnapshotIdentifier: number;
```

- *Type:* number

---

##### `minSnapshotIdentifier`<sup>Required</sup> <a name="minSnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.minSnapshotIdentifier"></a>

```typescript
public readonly minSnapshotIdentifier: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceMailBoxUrl`<sup>Required</sup> <a name="sourceMailBoxUrl" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.sourceMailBoxUrl"></a>

```typescript
public readonly sourceMailBoxUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFirstSnapshotGenerated`<sup>Required</sup> <a name="timeFirstSnapshotGenerated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.timeFirstSnapshotGenerated"></a>

```typescript
public readonly timeFirstSnapshotGenerated: string;
```

- *Type:* string

---

##### `timeLastSnapshotGenerated`<sup>Required</sup> <a name="timeLastSnapshotGenerated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.timeLastSnapshotGenerated"></a>

```typescript
public readonly timeLastSnapshotGenerated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `awrHubSourceIdInput`<sup>Optional</sup> <a name="awrHubSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrHubSourceIdInput"></a>

```typescript
public readonly awrHubSourceIdInput: string;
```

- *Type:* string

---

##### `awrHubSourceId`<sup>Required</sup> <a name="awrHubSourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.awrHubSourceId"></a>

```typescript
public readonly awrHubSourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubSourceConfig <a name="DataOciOpsiAwrHubSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSource } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubSourceConfig: dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.awrHubSourceId">awrHubSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_source#awr_hub_source_id DataOciOpsiAwrHubSource#awr_hub_source_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awrHubSourceId`<sup>Required</sup> <a name="awrHubSourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSource.DataOciOpsiAwrHubSourceConfig.property.awrHubSourceId"></a>

```typescript
public readonly awrHubSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_source#awr_hub_source_id DataOciOpsiAwrHubSource#awr_hub_source_id}.

---



