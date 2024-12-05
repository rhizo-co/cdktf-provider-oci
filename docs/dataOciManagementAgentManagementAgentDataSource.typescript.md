# `dataOciManagementAgentManagementAgentDataSource` Submodule <a name="`dataOciManagementAgentManagementAgentDataSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentDataSource <a name="DataOciManagementAgentManagementAgentDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig">DataOciManagementAgentManagementAgentDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig">DataOciManagementAgentManagementAgentDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isConstruct"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformElement"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformDataSource"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgentDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.allowMetrics">allowMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.isDaemonSet">isDaemonSet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.metricDimensions">metricDimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList">DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readDataLimit">readDataLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes">readDataLimitInKilobytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readTimeout">readTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.scheduleMins">scheduleMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dataSourceKeyInput">dataSourceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dataSourceKey">dataSourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowMetrics`<sup>Required</sup> <a name="allowMetrics" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.allowMetrics"></a>

```typescript
public readonly allowMetrics: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDaemonSet`<sup>Required</sup> <a name="isDaemonSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.isDaemonSet"></a>

```typescript
public readonly isDaemonSet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `metricDimensions`<sup>Required</sup> <a name="metricDimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.metricDimensions"></a>

```typescript
public readonly metricDimensions: DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList">DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `readDataLimit`<sup>Required</sup> <a name="readDataLimit" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readDataLimit"></a>

```typescript
public readonly readDataLimit: number;
```

- *Type:* number

---

##### `readDataLimitInKilobytes`<sup>Required</sup> <a name="readDataLimitInKilobytes" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes"></a>

```typescript
public readonly readDataLimitInKilobytes: number;
```

- *Type:* number

---

##### `readTimeout`<sup>Required</sup> <a name="readTimeout" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readTimeout"></a>

```typescript
public readonly readTimeout: number;
```

- *Type:* number

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `scheduleMins`<sup>Required</sup> <a name="scheduleMins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.scheduleMins"></a>

```typescript
public readonly scheduleMins: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `dataSourceKeyInput`<sup>Optional</sup> <a name="dataSourceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dataSourceKeyInput"></a>

```typescript
public readonly dataSourceKeyInput: string;
```

- *Type:* string

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.managementAgentIdInput"></a>

```typescript
public readonly managementAgentIdInput: string;
```

- *Type:* string

---

##### `dataSourceKey`<sup>Required</sup> <a name="dataSourceKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dataSourceKey"></a>

```typescript
public readonly dataSourceKey: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentDataSourceConfig <a name="DataOciManagementAgentManagementAgentDataSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentDataSourceConfig: dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.dataSourceKey">dataSourceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#data_source_key DataOciManagementAgentManagementAgentDataSource#data_source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#management_agent_id DataOciManagementAgentManagementAgentDataSource#management_agent_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceKey`<sup>Required</sup> <a name="dataSourceKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.dataSourceKey"></a>

```typescript
public readonly dataSourceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#data_source_key DataOciManagementAgentManagementAgentDataSource#data_source_key}.

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#management_agent_id DataOciManagementAgentManagementAgentDataSource#management_agent_id}.

---

### DataOciManagementAgentManagementAgentDataSourceMetricDimensions <a name="DataOciManagementAgentManagementAgentDataSourceMetricDimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentDataSourceMetricDimensions: dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList <a name="DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference <a name="DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions">DataOciManagementAgentManagementAgentDataSourceMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentDataSourceMetricDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions">DataOciManagementAgentManagementAgentDataSourceMetricDimensions</a>

---



