# `dataOciManagementDashboardManagementDashboardsExport` Submodule <a name="`dataOciManagementDashboardManagementDashboardsExport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementDashboardManagementDashboardsExport <a name="DataOciManagementDashboardManagementDashboardsExport" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export oci_management_dashboard_management_dashboards_export}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer"></a>

```typescript
import { dataOciManagementDashboardManagementDashboardsExport } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport(scope: Construct, id: string, config: DataOciManagementDashboardManagementDashboardsExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig">DataOciManagementDashboardManagementDashboardsExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig">DataOciManagementDashboardManagementDashboardsExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementDashboardManagementDashboardsExport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isConstruct"></a>

```typescript
import { dataOciManagementDashboardManagementDashboardsExport } from 'rhizo-co-terraform-provider-oci'

dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformElement"></a>

```typescript
import { dataOciManagementDashboardManagementDashboardsExport } from 'rhizo-co-terraform-provider-oci'

dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformDataSource"></a>

```typescript
import { dataOciManagementDashboardManagementDashboardsExport } from 'rhizo-co-terraform-provider-oci'

dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport"></a>

```typescript
import { dataOciManagementDashboardManagementDashboardsExport } from 'rhizo-co-terraform-provider-oci'

dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciManagementDashboardManagementDashboardsExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementDashboardManagementDashboardsExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementDashboardManagementDashboardsExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementDashboardManagementDashboardsExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDetails">exportDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDashboardIdInput">exportDashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDashboardId">exportDashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `exportDetails`<sup>Required</sup> <a name="exportDetails" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDetails"></a>

```typescript
public readonly exportDetails: string;
```

- *Type:* string

---

##### `exportDashboardIdInput`<sup>Optional</sup> <a name="exportDashboardIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDashboardIdInput"></a>

```typescript
public readonly exportDashboardIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `exportDashboardId`<sup>Required</sup> <a name="exportDashboardId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDashboardId"></a>

```typescript
public readonly exportDashboardId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementDashboardManagementDashboardsExportConfig <a name="DataOciManagementDashboardManagementDashboardsExportConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.Initializer"></a>

```typescript
import { dataOciManagementDashboardManagementDashboardsExport } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementDashboardManagementDashboardsExportConfig: dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.exportDashboardId">exportDashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#export_dashboard_id DataOciManagementDashboardManagementDashboardsExport#export_dashboard_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#id DataOciManagementDashboardManagementDashboardsExport#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportDashboardId`<sup>Required</sup> <a name="exportDashboardId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.exportDashboardId"></a>

```typescript
public readonly exportDashboardId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#export_dashboard_id DataOciManagementDashboardManagementDashboardsExport#export_dashboard_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#id DataOciManagementDashboardManagementDashboardsExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



