# `dataOciDatabaseManagementExternalExadataInfrastructure` Submodule <a name="`dataOciDatabaseManagementExternalExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructure <a name="DataOciDatabaseManagementExternalExadataInfrastructure" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructure oci_database_management_external_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure(scope: Construct, id: string, config: DataOciDatabaseManagementExternalExadataInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig">DataOciDatabaseManagementExternalExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig">DataOciDatabaseManagementExternalExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.databaseCompartments">databaseCompartments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.databaseSystems">databaseSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.dbSystemIds">dbSystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.discoveryKey">discoveryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.rackSize">rackSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.storageGrid">storageGrid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.storageServerNames">storageServerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.externalExadataInfrastructureIdInput">externalExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseCompartments`<sup>Required</sup> <a name="databaseCompartments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.databaseCompartments"></a>

```typescript
public readonly databaseCompartments: string[];
```

- *Type:* string[]

---

##### `databaseSystems`<sup>Required</sup> <a name="databaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.databaseSystems"></a>

```typescript
public readonly databaseSystems: DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList</a>

---

##### `dbSystemIds`<sup>Required</sup> <a name="dbSystemIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.dbSystemIds"></a>

```typescript
public readonly dbSystemIds: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `discoveryKey`<sup>Required</sup> <a name="discoveryKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.discoveryKey"></a>

```typescript
public readonly discoveryKey: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `rackSize`<sup>Required</sup> <a name="rackSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.rackSize"></a>

```typescript
public readonly rackSize: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageGrid`<sup>Required</sup> <a name="storageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.storageGrid"></a>

```typescript
public readonly storageGrid: DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList</a>

---

##### `storageServerNames`<sup>Required</sup> <a name="storageServerNames" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.storageServerNames"></a>

```typescript
public readonly storageServerNames: string[];
```

- *Type:* string[]

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `externalExadataInfrastructureIdInput`<sup>Optional</sup> <a name="externalExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.externalExadataInfrastructureIdInput"></a>

```typescript
public readonly externalExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.externalExadataInfrastructureId"></a>

```typescript
public readonly externalExadataInfrastructureId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructureConfig <a name="DataOciDatabaseManagementExternalExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructureConfig: dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructure#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataInfrastructure#external_exadata_infrastructure_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureConfig.property.externalExadataInfrastructureId"></a>

```typescript
public readonly externalExadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructure#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataInfrastructure#external_exadata_infrastructure_id}.

---

### DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems <a name="DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems: dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems = { ... }
```


### DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid <a name="DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructureStorageGrid: dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructureDatabaseSystems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList <a name="DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.serverCount">serverCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `serverCount`<sup>Required</sup> <a name="serverCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.serverCount"></a>

```typescript
public readonly serverCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructure.DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructureStorageGrid</a>

---



