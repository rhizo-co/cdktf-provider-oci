# `dataOciOpsiDatabaseInsight` Submodule <a name="`dataOciOpsiDatabaseInsight` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiDatabaseInsight <a name="DataOciOpsiDatabaseInsight" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight oci_opsi_database_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight(scope: Construct, id: string, config: DataOciOpsiDatabaseInsightConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig">DataOciOpsiDatabaseInsightConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig">DataOciOpsiDatabaseInsightConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiDatabaseInsight resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isConstruct"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformElement"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiDatabaseInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiDatabaseInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiDatabaseInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiDatabaseInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightConnectionCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList">DataOciOpsiDatabaseInsightConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList">DataOciOpsiDatabaseInsightCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseConnectionStatusDetails">databaseConnectionStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseDisplayName">databaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseResourceType">databaseResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName">enterpriseManagerEntityDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityName">enterpriseManagerEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityType">enterpriseManagerEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.entitySource">entitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.exadataInsightId">exadataInsightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.processorCount">processorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.rootId">rootId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseInsightIdInput">databaseInsightIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseInsightId">databaseInsightId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionCredentialDetails`<sup>Required</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectionCredentialDetails"></a>

```typescript
public readonly connectionCredentialDetails: DataOciOpsiDatabaseInsightConnectionCredentialDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightConnectionCredentialDetailsList</a>

---

##### `connectionDetails`<sup>Required</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectionDetails"></a>

```typescript
public readonly connectionDetails: DataOciOpsiDatabaseInsightConnectionDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList">DataOciOpsiDatabaseInsightConnectionDetailsList</a>

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `credentialDetails`<sup>Required</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.credentialDetails"></a>

```typescript
public readonly credentialDetails: DataOciOpsiDatabaseInsightCredentialDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList">DataOciOpsiDatabaseInsightCredentialDetailsList</a>

---

##### `databaseConnectionStatusDetails`<sup>Required</sup> <a name="databaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseConnectionStatusDetails"></a>

```typescript
public readonly databaseConnectionStatusDetails: string;
```

- *Type:* string

---

##### `databaseDisplayName`<sup>Required</sup> <a name="databaseDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseDisplayName"></a>

```typescript
public readonly databaseDisplayName: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databaseResourceType`<sup>Required</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseResourceType"></a>

```typescript
public readonly databaseResourceType: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `dbmPrivateEndpointId`<sup>Required</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.dbmPrivateEndpointId"></a>

```typescript
public readonly dbmPrivateEndpointId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `enterpriseManagerBridgeId`<sup>Required</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerBridgeId"></a>

```typescript
public readonly enterpriseManagerBridgeId: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="enterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName"></a>

```typescript
public readonly enterpriseManagerEntityDisplayName: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier"></a>

```typescript
public readonly enterpriseManagerEntityIdentifier: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityName`<sup>Required</sup> <a name="enterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityName"></a>

```typescript
public readonly enterpriseManagerEntityName: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityType`<sup>Required</sup> <a name="enterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerEntityType"></a>

```typescript
public readonly enterpriseManagerEntityType: string;
```

- *Type:* string

---

##### `enterpriseManagerIdentifier`<sup>Required</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.enterpriseManagerIdentifier"></a>

```typescript
public readonly enterpriseManagerIdentifier: string;
```

- *Type:* string

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.entitySource"></a>

```typescript
public readonly entitySource: string;
```

- *Type:* string

---

##### `exadataInsightId`<sup>Required</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.exadataInsightId"></a>

```typescript
public readonly exadataInsightId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAdvancedFeaturesEnabled`<sup>Required</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isAdvancedFeaturesEnabled"></a>

```typescript
public readonly isAdvancedFeaturesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isHeatWaveClusterAttached"></a>

```typescript
public readonly isHeatWaveClusterAttached: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.isHighlyAvailable"></a>

```typescript
public readonly isHighlyAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointId`<sup>Required</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `processorCount`<sup>Required</sup> <a name="processorCount" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.processorCount"></a>

```typescript
public readonly processorCount: number;
```

- *Type:* number

---

##### `rootId`<sup>Required</sup> <a name="rootId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.rootId"></a>

```typescript
public readonly rootId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `databaseInsightIdInput`<sup>Optional</sup> <a name="databaseInsightIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseInsightIdInput"></a>

```typescript
public readonly databaseInsightIdInput: string;
```

- *Type:* string

---

##### `databaseInsightId`<sup>Required</sup> <a name="databaseInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.databaseInsightId"></a>

```typescript
public readonly databaseInsightId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsight.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiDatabaseInsightConfig <a name="DataOciOpsiDatabaseInsightConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightConfig: dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.databaseInsightId">databaseInsightId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight#database_insight_id DataOciOpsiDatabaseInsight#database_insight_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseInsightId`<sup>Required</sup> <a name="databaseInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConfig.property.databaseInsightId"></a>

```typescript
public readonly databaseInsightId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insight#database_insight_id DataOciOpsiDatabaseInsight#database_insight_id}.

---

### DataOciOpsiDatabaseInsightConnectionCredentialDetails <a name="DataOciOpsiDatabaseInsightConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightConnectionCredentialDetails: dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails = { ... }
```


### DataOciOpsiDatabaseInsightConnectionDetails <a name="DataOciOpsiDatabaseInsightConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightConnectionDetails: dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails = { ... }
```


### DataOciOpsiDatabaseInsightConnectionDetailsHosts <a name="DataOciOpsiDatabaseInsightConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightConnectionDetailsHosts: dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts = { ... }
```


### DataOciOpsiDatabaseInsightCredentialDetails <a name="DataOciOpsiDatabaseInsightCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightCredentialDetails: dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiDatabaseInsightConnectionCredentialDetailsList <a name="DataOciOpsiDatabaseInsightConnectionCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails">DataOciOpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightConnectionCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionCredentialDetails">DataOciOpsiDatabaseInsightConnectionCredentialDetails</a>

---


### DataOciOpsiDatabaseInsightConnectionDetailsHostsList <a name="DataOciOpsiDatabaseInsightConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference <a name="DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp">hostIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts">DataOciOpsiDatabaseInsightConnectionDetailsHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostIp`<sup>Required</sup> <a name="hostIp" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp"></a>

```typescript
public readonly hostIp: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightConnectionDetailsHosts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHosts">DataOciOpsiDatabaseInsightConnectionDetailsHosts</a>

---


### DataOciOpsiDatabaseInsightConnectionDetailsList <a name="DataOciOpsiDatabaseInsightConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightConnectionDetailsOutputReference <a name="DataOciOpsiDatabaseInsightConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList">DataOciOpsiDatabaseInsightConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails">DataOciOpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts"></a>

```typescript
public readonly hosts: DataOciOpsiDatabaseInsightConnectionDetailsHostsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsHostsList">DataOciOpsiDatabaseInsightConnectionDetailsHostsList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightConnectionDetails">DataOciOpsiDatabaseInsightConnectionDetails</a>

---


### DataOciOpsiDatabaseInsightCredentialDetailsList <a name="DataOciOpsiDatabaseInsightCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails">DataOciOpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsight.DataOciOpsiDatabaseInsightCredentialDetails">DataOciOpsiDatabaseInsightCredentialDetails</a>

---



